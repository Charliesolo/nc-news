function ErrorHandling({error}) {
return (
<section>
    <p>Something went wrong.</p>
    {error.response.status? <p>{error.response.status}</p>: null}
    {error.response.data.msg? <p>{error.response.data.msg}</p>: null}
</section>
)
}

export default ErrorHandling