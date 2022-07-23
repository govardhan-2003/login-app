<script>
    import {onMount} from 'svelte';
    import {goto} from '$app/navigation';
    import supabase from '$lib/supabase.js';
    import Book from '$lib/components/book.svelte';
    import { fly } from 'svelte/transition';

    
    
    let isSiteReadyToLoad = false;
    onMount(() =>{  
        const user = supabase.auth.user();
        if(user === null){
            goto('/');
        }
        else{
            isSiteReadyToLoad = true;
        }
    })


    const signOut = async() => {
        await supabase.auth.signOut();
        goto('/');
        console.log(supabase.auth.user())
    }
</script>


{#if isSiteReadyToLoad}
<div in:fly="{{ y: 100, duration: 1000 }}" class="container">
    <h1>BOOKS</h1>
    <div class="books">
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    <Book name={"Harry Potter And The Sorcerer's Stone"} isbn={"9780590353403"}/>
    </div>
</div>
{/if}


<style>

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}



.books{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
}



    
</style>