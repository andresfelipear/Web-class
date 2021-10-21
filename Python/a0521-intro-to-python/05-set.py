# A set is a collection which is unordered and unindexed.
# No duplicate members

#create a set
fruits = {'Apples', 'Orange', 'Grapes'}

#check if in set
print('Kiwi' in fruits)

#add to set
fruits.add('Kiwi')

#remove from set
fruits.remove('Apples')

#add duplicate
fruits.add('Orange')

#clear set
fruits.clear()

#delete
del fruits

print(fruits)