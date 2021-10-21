# A dictionary is a collection which is unordered, changeable and indexed.
# No duplicate members

#create a dictionary
person = { 
    'first_name' : 'John', 
    'last_name': 'Doe', 
    'age': 30
}

#use constructor
person2 = dict(first_name='Sarah', last_name='Connor')

#get value
print(person['first_name'])
print(person.get('last_name'))

#add key/value
person['phone'] = '555-555-5555'

#get all dict keys
print(person.keys())

#get all dict items
print(person.items())

#remove item
del(person['age'])
person.pop('phone')

#copy dict items
person2 = person.copy()
person2['city'] = 'Vancouver'

#get length
print(len(person2))

#clear
person.clear()

#List of dictionaries
people = [
    {'name': 'Kevin', 'age':30},
    {'name': 'Dwayne', 'age':32}
]

print(person)
print(person2)

print(people[1]['name'])
