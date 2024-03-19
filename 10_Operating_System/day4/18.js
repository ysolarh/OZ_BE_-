// 도달 가능성이 있는가 없는가에 따라 제거할지 판단

let players = {
  boys : {
    Bergkamp : "Striker"
  }
}

let persons = players

players = ["Son", "Park"]

let human = persons.boys

persons = "persons"

human = null
// boys 레퍼런스 카운트 0됨
// 레퍼런스 카운트 세면서 코드 보는 연습
