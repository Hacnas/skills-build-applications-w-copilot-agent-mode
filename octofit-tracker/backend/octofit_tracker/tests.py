from django.test import TestCase
from rest_framework.test import APIClient
from django.urls import reverse

class SmokeTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_api_root(self):
        response = self.client.get(reverse('api-root'))
        self.assertEqual(response.status_code, 200)
