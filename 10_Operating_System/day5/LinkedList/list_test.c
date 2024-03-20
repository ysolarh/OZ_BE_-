#include <stdio.h>
#include "linked_list.h"

int main(void) {
    t_list *lst;
    void *content;

    content = "content";
    lst = lstnew(content);
    printf("%s\n", (char *)lst->content);
    printf("%d\n", lstsize(lst));
}