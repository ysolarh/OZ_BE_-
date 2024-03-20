#ifndef LINKED_LIST_H
#define LINKED_LIST_H

#include <stdlib.h>

typedef struct s_list {
  void* content;
  struct s_list* next;
} t_list;

t_list* lstnew(void* content);
int lstsize(t_list* lst);
void lstadd_front(t_list** lst, t_list* new);
void lstadd_back(t_list** lst, t_list* new);
void lstdelone(t_list* lst, void (*del)(void*));
void lstclear(t_list** lst, void (*del)(void*));
void lstiter(t_list* lst, void (*f)(void*));
void lstadd_back(t_list** lst, t_list* new);

#endif