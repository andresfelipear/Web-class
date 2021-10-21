x = 21
y = 15

'''
Comparison operators 
==
!=
>
<
>=
<=
'''

#simple if
if x > y:
    print(f'{x} is greater than {y}')

#if/else
if x > y:
    print(f'{x} is greater than {y}')
else:
    print(f'{y} is greater than {x}')

#elif (else/if)
if x > y:
    print(f'{x} is greater than {y}') 
elif x == y:
    print(f'{x} is equal to {y}')
else:
    print(f'{y} is greater than {x}')


#nested if
if x > 2:
    if x <= 20:
        print(f'{x} is greater than 2 and less than or equal to 20')



# Logical operators (and, or, not)

#and
if x > 2 and x <= 20:
    print(f'{x} is greater than 2 and less than or equal to 20')

#or
if x > 2 or x <= 20:
    print(f'{x} is greater than 2 or less than or equal to 20')

#not
if not(x == y):
    print(f'{x} is not equal to {y}')


#Membership operators (in, not in)

num = 6
numbers = [1,2,3,4,5]

#in
if num in numbers:
    print('IN:')
    print(num in numbers)

#not in
if num not in numbers:
    print('NOT IN: ')
    print(num not in numbers)


#Identity operators (is, is not)
a = 4
b = 5

#is
if a is b:
    print('IS:')
    print(a is b)

#is not
if a is not b:
    print('IS NOT:')
    print(a is not b)