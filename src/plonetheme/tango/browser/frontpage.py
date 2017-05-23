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
            portal_type='News Item',
            sort_order='descending',
        )
        for brain in brains:
            results.append({
                'title': brain.Title,
                'summary': brain.Description,
                'url': brain.getURL()
                })
        return results

    def slider_images(self):
        results = []
        portal = api.portal.get()
        brains = api.content.find(
            portal_type='Image',
            sort_order='descending',
            path=portal['slider-images'].getPhysicalPath()
        )
        for brain in brains:
            obj = brain.getObject()
            results.append({
                'title': brain.Title,
                'description': brain.Description,
                'obj': obj
                })
        return results
