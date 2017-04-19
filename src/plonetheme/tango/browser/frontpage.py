# -*- coding: utf-8 -*-
from plone import api
from Products.Five.browser import BrowserView

import datetime


class FrontpageView(BrowserView):
    """The view of the conference frontpage
    """

    def news(self):
        """Get today's news"""
        results = []
        today = datetime.date.today()
        brains = api.content.find(
            portal_type='news_item',
            sort_order='descending',
        )
        for brain in brains:
            results.append({
                'title': brain.Title,
                'summary': brain.Description,

                })
        return results