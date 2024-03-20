#include <stdio.h>
#include "linked_list.h"

int main(void) {
    t_list *lst;
    t_list *new;
    void *content;
    void *new_content;

    content = "content";
    lst = lstnew(content);
    printf("%s\n", (char *)lst->content);
    printf("%d\n", lstsize(lst));
    new_content = "new";
    new = lstnew(new_content);
    lstadd_back(lst, new);
    lstadd_front(lst, new);
    
}