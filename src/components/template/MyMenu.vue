<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact="">
                <a>Home</a>
            </router-link>
            <router-link to="/about" tag="li" active-class="active">
                <a>About</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu ul {
    display: flex;    
    background-color: #777;
    list-style: none;
    padding: 0;
    border-radius: 50px;
    overflow: hidden;
}

.menu li {
    flex: 1;
}

.menu a {
    display: flex;
    justify-content: center;
    padding: 15px 40px;
    text-decoration: none;
    font-weight: 600;
    white-space: nowrap;
}

.menu .active {
    background-color: #2392f0;
}

.menu .active a {
    color: #FFF;
}

.menu a {
    color: #FFF;
}
</style>
