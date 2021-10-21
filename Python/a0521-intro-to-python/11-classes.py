#create class

class User:

    #constructor
    def __init__(self,name,email,age):
        self.name = name
        self.email = email
        self.age = age

    def greeting(self):
        return f"My name is {self.name} and I am {self.age}"


#init a user object
emily = User('Emily', 'em@mail.com', 20)
emily2 = User('Emily', 'em@mail.com', 20)
# jane = User('Jane', 'jane@mail.com', 37)

print(emily)
print(emily2)
# print(jane)