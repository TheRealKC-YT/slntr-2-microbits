def on_button_pressed_a():
    global value_at_letter_list, current_letter, current_letter_value
    value_at_letter_list += 1
    if value_at_letter_list == 21:
        value_at_letter_list = 1
    current_letter = letters[value_at_letter_list]
    current_letter_value = value_at_letter_list
    basic.show_string(current_letter)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_value(current_letter, current_letter_value)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    global value_at_letter_list
    value_at_letter_list = value
    basic.show_string(name)
radio.on_received_value(on_received_value)

current_letter_value = 0
current_letter = ""
letters: List[str] = []
value_at_letter_list = 0
radio.set_group(2)
basic.clear_screen()
value_at_letter_list = 0
letters = ["",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"]