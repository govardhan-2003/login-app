<script>
import supabase from '$lib/supabase.js'
let email = '';
let password = '';
const signUp = async() => {
    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });
    if(user){
        console.log(user)

    }
    if(error){
        console.log(error);
    }
}

</script>

<section>
    <input type="email" placeholder="email" bind:value={email}>
    <input type="password" placeholder="password" bind:value={password}>
    <button on:click={signUp}>LOGIN</button>
</section>




<style>
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    input{
        margin: 10px;
        padding: 15px 10px;
        width: 250px;
        border: none;
        background-color: #EBEBEB;
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
