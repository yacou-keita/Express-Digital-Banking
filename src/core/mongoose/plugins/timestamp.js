export const timestamp = (schema) => {
    schema.add({
        createdAt : Date,
        updatedAt : Date
    })

    schema.pre("save", function (next){
        const currentDate = Date.now()
        this.updatedAt = currentDate
    
        if(!this.createdAt){
            this.createdAt = currentDate
        }
        next()
    })
}