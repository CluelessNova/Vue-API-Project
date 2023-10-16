<template>
    <h1>Contact</h1>
    <div>
        <form id="contactForm">
            <div class="contactForm-item" id="contactForm-name">
                <label class="contactForm-label">Name</label><br>
                <input id="inputForm-name" type="text" placeholder="John Smith">
            </div>
            <div class="contactForm-item" id="contactForm-email">
                <label class="contactForm-label">Email</label><br>
                <input id="inputForm-email" type="text" placeholder="johnsmith@gmail.com">
            </div>
            <div class="contactForm-item" id="contactForm-message">
                <label class="contactForm-label">Message</label><br>
                <textarea id="inputForm-message" placeholder="Enter your mesaage"></textarea>
            </div>
            <input id="inputForm-submit" type="submit">
        </form>
    </div>
    <h3>If you'd like to contact me about any opportunites, feel free to reach out via the form</h3>
</template>

<style>
.contactForm-item {
    width: 20rem;
    /* border: 1px solid black; */
    margin-left: auto;
    margin-right: auto;
}

.contactForm-label {
    float: left;
}

#contactForm {
    width: 30rem;

    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    /* border: 1px solid black; */
    box-shadow: 0 0 15px 2px black;
    display: flex;
    flex-direction: column;
}

#contactForm-name {
}

#contactForm-email {
}

#contactForm-message {
}

#inputForm-name {
    float: left;
}

#inputForm-email {
    float: left;
}

#inputForm-message {
    width: 100%;
    height: 8rem;
}

#inputForm-submit {
    width: 5rem;
    height: 2rem;
    margin-left: auto;
    margin-right: auto;
}
</style>

<script lang="ts">
</script>