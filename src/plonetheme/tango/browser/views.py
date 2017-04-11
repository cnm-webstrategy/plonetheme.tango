from Products.Five.browser import BrowserView

class DemoView(BrowserView):
    """ This does nothing so far
    """

    def the_title(self):
        return u'A list of great trainings:'