# 과제 5. 파일과 메모리
불연속할당 설명 시에 언급했던 '연결리스트' 자료구조에 대해 조사하고 정리해보자.
C언어를 이용해 연결리스트를 구현하는 예제까지 함께 첨부해서 마무리하자!

### 연결리스트
	각 노드가 데이터와 포인터를 가지고 연결되어 있는 방식으로 데이터를 저장하는 자료구조이다.  
	각 노드는 다음 노드의 주소값을 가지고 있는 포인터를 포함한다.  
	자료의 추가와 삭제는 O(1), 특정 위치의 데이터 검색은 O(N)의 시간복잡도를 가진다.  
	원소들이 메모리 상에 연속해있지 않아 cache hit rate가 낮지만 할당이 다소 쉽다.  

	- 종류
		- 단일 연결 리스트
		- 이중 연결 리스트
		- 원형 연결 리스트


### C언어 연결리스트 구현
https://github.com/ysolarh/OZ_class_backend/tree/main/10_Operating_System/day5/LinkedList

``` c
typedef struct s_list
{
	void			*content;
	struct s_list	*next;
}	t_list;
```

``` c
t_list	*lstnew(void *content)
{
	t_list	*new;

	new = (t_list *)malloc(sizeof(t_list));
	if (!new)
		return (NULL);
	new->content = content;
	new->next = NULL;
	return (new);
}

int	lstsize(t_list *lst)
{
	int	size;

	size = 0;
	while (lst)
	{
		size++;
		lst = lst->next;
	}
	return (size);
}

void	lstadd_front(t_list **lst, t_list *new)
{
	new->next = *lst;
	*lst = new;
}

void	lstadd_back(t_list **lst, t_list *new)
{
	t_list	*last;

	if (!lst || !new)
		return ;
	if (!*lst)
	{
		*lst = new;
		return ;
	}
	last = *lst;
	while (last->next)
		last = last->next;
	last->next = new;
}

void	lstdelone(t_list *lst, void (*del)(void *))
{
	if (!lst || !del)
		return ;
	del(lst->content);
	free(lst);
}

void	lstclear(t_list **lst, void (*del)(void *))
{
	t_list	*curr;
	t_list	*next;

	curr = *lst;
	while (curr)
	{
		next = curr->next;
		lstdelone(curr, del);
		curr = next;
	}
	*lst = 0;
}

void	lstiter(t_list *lst, void (*f)(void *))
{
	while (lst)
	{
		f(lst->content);
		lst = lst->next;
	}
}

t_list	*lstlast(t_list *lst)
{
	if (!lst)
		return (lst);
	while (lst->next)
		lst = lst->next;
	return (lst);
}

```

#### 참고 글
  https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8  
  https://code-lab1.tistory.com/2  
  