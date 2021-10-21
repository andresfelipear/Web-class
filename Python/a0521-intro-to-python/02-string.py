name = "John"
age = 37

# print('Hello, my name is ' +name+ 'and i am '+ age) //error
print('Hello, my name is ' +name+ ' and i am '+ str(age))

# String formatting - arguments by position
print('My name is {someName} and I am {age}'.format(someName=name,age=age))

# String formatting - F-Strings
print(f'Hello, my name is {name} and I am {age}')

#String Methods
s = 'helloworld'

#Capitalize string
print(s.capitalize())

#Make all capital
print(s.upper())

#Make all lowercase
print(s.lower())

#swap case
print(s.swapcase())

#get length
print(len(s))

#replace
print(s.replace('world', 'everyone')) #non destructive

#count
sub = 'l'
print(s.count(sub))

#starts with
print(s.startswith('hello'))

#ends with
print(s.endswith('e'))

#split into a list
print(s.split())

#find position
print(s.find('r'))

#is all alphanumeric
print(s.isalnum())

#is all numeric
print(s.isnumeric())

