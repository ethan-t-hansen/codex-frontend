export interface NewsItemProps {
    article: {
        title: string
        description: string
        url: string
        urlToImage: string
        source: {
            name: string
        }
        publishedAt: string
    }
    onPress: (url: string) => void
}