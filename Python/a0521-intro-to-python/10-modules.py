#Core modules
import datetime
from datetime import date
import time
from time import time

#PIP module
#pip install camelcase
#pip freeze
from camelcase import CamelCase

#Custom module
# import validator
from validator import validate_email


# today = datetime.date.today()
today = date.today()
print(today)

# timestamp = time.time()
timestamp = time()
print(timestamp)

c = CamelCase()
print(c.hump('hello there world'))

email = "test#mail.com"
if validate_email(email):
    print("Email is valid")
else:
    print("Email is NOT valid")