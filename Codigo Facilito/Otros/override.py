class Book(object):
    def __init__(self):
        self.__title = ""
        self.__author = ""

    def set_title(self, title):
        self.__title = title

    def set_author(self, author):
        self.__author = author

    def clean_data(self):
        print "Entro a esta funcion"
        self.set_author("")
        self.set_title("")

    def get_description(self):
        return "The title name: {} written by {}.".format(self.__title, self.__author)

class Thriller(Book):
    def __init__(self, title, author):
        self.set_title(title)
        self.set_author(author)

    def clean_data(self):
        super(Thriller, self).clean_data()
        self.set_title("Hola desde mi metodo")

if __name__ == "__main__":
    test = Thriller('test titulo', 'test autor')
    test.clean_data()
    print test.get_description()
