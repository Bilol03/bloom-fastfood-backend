class ValidationError extends Error {
    constructor(status, message) {
        super() 
        this.status = status
        this.name = "ValidationError"
        this.message = message
    }
}

class InternalServerError extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.name = "InternalServerError"
        this.message = message
    }
}

class AuthorizationError extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.name = "AuthorizationError"
        this.message = message
    }
}

class ForbiddenError extends Error {
    constructor(status, message) {
        super()
        this.name = 'ForbiddenError'
        this.message = message
        this.status = status
    }
}

export {
    ValidationError,
    AuthorizationError,
    InternalServerError,
    ForbiddenError

}