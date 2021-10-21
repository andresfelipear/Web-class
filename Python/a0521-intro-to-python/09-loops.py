people = ['John', 'Paul','Sara','Susan']

#Simple loop
for person in people:
    print(person)

print('*********')
#Break
for person in people:
    if person == 'Sara':
        break
    print(person)

print('*********')
#Continue
for person in people:
    if person == 'Sara':
        continue
    print(person)


print('*********')
#range
for i in range(len(people)):
    print(people[i])

print('*********')
for i in range(0, 11):
    print(i)

#While
counter = 0
print('*********')
while counter < 10:
    print(counter)
    counter += 1