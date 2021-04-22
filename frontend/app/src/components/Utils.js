// Fetch next due card
export const fetchNextCard = async () => {
    const res = await fetch('http://localhost:8000/api/spacedRetrievals/nextCard')
    const data = await res.json()
    return data
}
// Fetch card after first answer
export const getExamable = async () => {
    const nextCard = await fetchNextCard()
    return nextCard
}
// Scroll to top
export const scrollToTop = () => {
    window.scrollTo(0, 0)
}
