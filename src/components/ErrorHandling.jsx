function ErrorHandling({error}) {
return (
<section>
    <p>Something went wrong.</p>
    <p>{error.response.status}</p>
    <p>{error.response.data.msg}</p>
</section>
)
}

export default ErrorHandling