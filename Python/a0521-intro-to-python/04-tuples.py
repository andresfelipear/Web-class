# A Tuple is a collection which is ordered an unchangeable. 
# Allows duplicate members

#create a tuple
fruits = ('Apples', 'Orange', 'Grapes', 'Apples')

#using a contructor
fruits2 = tuple(('Apples', 'Orange', 'Grapes'))
print(type(fruits2))

fruits3 = ('Apples',) #single values needs trailing comma for tuple
print(fruits3, type(fruits3))

#get a value
print(fruits[1])

# can't change value
# fruits[0] = 'Bread'

#delete tuple
del fruits2
# print(fruits2)

#get length
print(len(fruits))

print(fruits)