<script>
    export let isbn;
    export let name;
</script>

<div class="card">
    <img src="https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg" alt="book-cover">
    <p>{name}</p>
</div>

<style>
    .card{
        background-color: white;
        max-width: 150px;
        padding: 0.5em;
        padding-bottom: 0.2em;  
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);;
        margin: 10px;
        border-radius: 3px;
        text-align: center;
    }


    .card:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    img{
        display: block;
        width: 100%;
        height: 12em;
        object-fit: contain;
    }
</style>