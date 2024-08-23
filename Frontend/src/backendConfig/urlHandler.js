class UrlHandler {
    constructor() {

    }

    async createShortenUrl(originalUrl, customUrl) {
        try {
            console.log(originalUrl,customUrl)
            const response = await fetch("http://localhost:4000/api/url", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    originalUrl:originalUrl,
                    customUrl:customUrl,
                })
            })

            if(!response){
                throw new Error("Network Error")
            }

            const data = await response.json()
            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getUrl(customUrl){
        try {
            const response = await fetch(`http://localhost:4000/api/url/${customUrl}`)
            const data = await response.json()
            return data
        } catch (error) {
            console.log(error.message)
            return null
        }
    }
}

export const urlHandler = new UrlHandler()