<script>
import supabase from '$lib/supabase.js'
import { goto } from '$app/navigation';
import {fade} from 'svelte/transition'
let email = '';
let password = '';
const signIn = async() => {
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
    });
    if(user){
        
        goto('/books');

    }
    if(error){
        console.log(error);
    }
}

</script>

<section>
    <h1 in:fade>Welcome!</h1>
    <input type="email" placeholder="email" bind:value={email}>
    <input type="password" placeholder="password" bind:value={password}>
    <button on:click={signIn}>LOGIN</button>
</section>




<style>
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        aspect-ratio : 1 / 1;
        width: 500px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    h1{
        font-size: 2em;
    }
    
    input{
        margin: 10px;
        padding: 15px 10px;
        width: 250px;
        border: none;
        background-color: #e3f1fd;
        border-radius: 5px;
    }

    input:focus{
        outline: none !important;
        border:1px solid red;
    }
    button{
        all: unset;
        margin: 10px;
        width: 250px;
        padding: 10px;
        text-align: center;
        background-color: #EF2D56;
        color: white;
    }
</style>
