
#create a function
def sayHello(name='Sam'):
    print(f'Hello {name}')

sayHello('Aubrey')

#Return values
def getSum(num1, num2):
    total = num1 + num2
    return total

# print(total)
print(getSum(4,5))

# A lambda function is a small anonymous function.
# Can only have on expression

# getSum = (num1, num2) => num1 + num2 #in JS
getSum2 = lambda num1, num2: num1 + num2
print(getSum2(10,3))