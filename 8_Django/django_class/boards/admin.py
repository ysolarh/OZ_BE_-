from django.contrib import admin
from .models import Board


@admin.register(Board)
class BoardAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'likes', 'updated_at', 'created_at')
    list_filter = ('created_at', 'writer')
    search_fields = ('title', 'content')
    ordering = ('-created_at', )
    # readonly_fields = ('writer', )
    list_per_page = 1
    fieldsets = (
        (None, {'fields': ('title', 'content')}),
        ('Advanced options', {'fields': ('writer', 'likes', 'reviews'), 'classes': ('collapse', )})
    )
    actions = 'increment_likes'

    def increment_likes(self, request, queryset):
        for board in queryset:
            board.likes += 1
            board.save()

    increment_likes.short_description = '선택된 게시글의 좋아요 수 증가'
