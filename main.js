const str = `
010-1234-5678
thesecon@gmail.com
https://regexr.com/
The quick brown fox jump over the lazy dog.
abbcccdddd
http://www.local.com
동해물과_백두산이 마르고 닳도록
`

console.log(
  str.match(/(?<=@).{1,}/g)
)
