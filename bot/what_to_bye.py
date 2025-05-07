'''
https://t.me/whatIWishToByeBot
'''
import telebot
from telebot import types
import time
import json

API = '6706058315:AAGKcp9hapB0H8WP9NJOEXLV6YCpySKz5_w'
BUTTONS = ['Новая задача ✍️', 'Список дел 📃']
WEEK_BUTTONS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
TIME_START = 7
TIME_END = 21
TASK_BUTTONS = ['✔️','❌','📆','🕓']

todo_list = []

bot = telebot.TeleBot(API)

def task_keyboard(task_id):
    keyboard = types.InlineKeyboardMarkup(row_width=4)
    keyboard_buttons = []
    for button in TASK_BUTTONS:
        data = {
            'id': task_id,
            'action': button
            }
        print(data)
        data_json = json.dumps(data)
        print(data_json)
        task_button = types.InlineKeyboardButton(button, callback_data=data_json)
        keyboard_buttons.append(task_button)
    keyboard.add(*keyboard_buttons)
    return keyboard

def add_new_task(message):
    bot.send_message(message.chat.id, 'Введите название задачи:')


def print_todo_list(message):
    # text_list = ''
    if  not todo_list:
        bot.send_message(message.chat.id, 'Ваш список пуст!')
    else:
        for i, todo in enumerate(todo_list):
            text = f'Задача №{i+1}. {todo.name}\n{todo.day} - {todo.time}\n'
            bot.send_message(message.chat.id, text, reply_markup=task_keyboard(todo.id))


class Task:
    def __init__(self, name, task_day='', task_time=''):
        self.id = time.time()
        self.name = name
        self.day = task_day
        self.time = task_time


@bot.message_handler(commands=['start'])
def send_welcome(message):
    markup = types.ReplyKeyboardMarkup(
        resize_keyboard=True, one_time_keyboard=False)
    new_task_btn = types.KeyboardButton(BUTTONS[0])
    todo_list_btn = types.KeyboardButton(BUTTONS[1])
    markup.row(new_task_btn, todo_list_btn)
    bot.send_message(
        message.chat.id, "Привет, напиши 'Новая задача' для добавления новой задачи или 'Список дел' для просмотра твоего списка", reply_markup=markup)

@bot.message_handler(commands=['help'])
def help(message):
    bot.send_message(message.chat.id, \
                     "Привет! Вот список доступных команд:\n/start – начало работы\n/help – список доступных команд\n/new_task – добавить новую задачу\n/todo_list – посмотреть список дел")

@bot.message_handler(commands=['new_task'])
def newtask(message):
    add_new_task(message)

@bot.message_handler(commands=['todo_list'])
def todolist(message):
    print_todo_list(message)

@bot.message_handler(content_types=['text'])
def answer(message):
    if message.text == BUTTONS[0]:
        add_new_task(message)
    elif message.text == BUTTONS[1]:
        print_todo_list(message)
    else:
        new_task = Task(message.text)
        todo_list.append(new_task)
        bot.send_message(message.chat.id, f'Добавлена задача:\n{new_task.name}')
        keyboard = types.InlineKeyboardMarkup(row_width=4)
        keyboard_buttons = []
        for day in WEEK_BUTTONS:
            day_btn = types.InlineKeyboardButton(day, callback_data=day)
            keyboard_buttons.append(day_btn)
            # keyboard.add(day_btn)
        keyboard.add(*keyboard_buttons)
        bot.send_message(message.chat.id, 'Выберите день начала задачи', reply_markup=keyboard)
        keyboard_time = types.InlineKeyboardMarkup(row_width=5)
        keyboard_buttons_time = []
        for time in range(TIME_START, TIME_END + 1):
            time_str = f'{time}:00'
            time_btn = types.InlineKeyboardButton(time_str, callback_data=f'time_select{time_str}')
            keyboard_buttons_time.append(time_btn)
        keyboard_time.add(*keyboard_buttons_time)
        bot.send_message(message.chat.id, 'Выберите время начала задачи', reply_markup=keyboard_time)

@bot.callback_query_handler(func=lambda call: call.data in WEEK_BUTTONS)
def day_select(call):
    if len(todo_list) > 0:
        todo_list[-1].day = call.data
    bot.edit_message_text(f'Запланирована на {call.data}', call.message.chat.id, call.message.message_id)
    bot.answer_callback_query(call.id)

@bot.callback_query_handler(func=lambda call: call.data[:11] == 'time_select')
def time_select(call):
    if len(todo_list) > 0:
        todo_list[-1].time = call.data[11:]
    bot.edit_message_text(f'Запланирована на {call.data[11:]}', call.message.chat.id, call.message.message_id)
    bot.answer_callback_query(call.id)

@bot.callback_query_handler(func=lambda call: True)
def handler(call):
    data = json.loads(call.data)
    print(f'Нажали кнопку {data}')

    
bot.infinity_polling()
