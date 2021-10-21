#create list

numbers = [1,2,3,4,5]
fruits = ['Apples', 'Orange','Grapes','Pears', 'Apples']
# print(fruits)

#use a constructor
numbers2 = list((1,2,3,4,5))

#get a value
print(fruits[1])

#get the last value
print(fruits[-1])

#get the length
print(len(fruits))

#append to list
fruits.append('Kiwi')

#Remove fromt list
fruits.remove('Grapes')

#Insert into position
fruits.insert(2, 'Strawberries')

#change value
fruits[0] = 'Blueberries'

# remove with pop
fruits.pop()

#reverse the list
fruits.reverse()

#sort list
fruits.sort()

#reverse sort
fruits.sort(reverse=True)

print(fruits)