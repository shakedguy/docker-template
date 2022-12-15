import os
import pathlib
import subprocess


CURRENT_DIR = pathlib.Path(__file__).resolve().parent
BASE_DIR = CURRENT_DIR.parent

NODE_FILE = BASE_DIR / 'nodejs' / 'index.js'

if __name__ == '__main__':
    p = subprocess.Popen(
        ['node', NODE_FILE, 'This is nodejs script runs by python!'],
        stdout=subprocess.PIPE,
    )
    out = p.stdout.read().strip().decode('utf-8')
    print('\n############################################################')
    print('node script output:')
    print(out)
    print('############################################################')


input = input("Press any key to exit...")
