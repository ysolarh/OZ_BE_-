from django.db import models
from common.models import CommonModel


class Board(CommonModel):
    title = models.CharField(max_length=30)
    content = models.TextField()
    likes = models.PositiveIntegerField(default=0)
    reviews = models.PositiveIntegerField(default=0)
    writer = models.ForeignKey("users.User", on_delete=models.CASCADE)

    def __str__(self):
        return self.title
