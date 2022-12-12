<template>
	<div class="about">
		<h1>Form Vuelidate</h1>
		<form class="w-full max-w-sm" @submit.prevent="submitForm">
			<div class="md:flex md:items-center mb-6">
				<div class="md:w-1/3">
					<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
						E-mail
					</label>
				</div>
				<div class="md:w-2/3">
					<input
						class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-full-name" type="text" placeholder="Enter your e-mail"
						:class="{ inputError: vue$.email.$error }" v-model="formData.email">
				<span class="text-xs text-red-500" v-for="error in vue$.email.$errors" :key="error.$uid">
					{{ error.$message }}
				</span>
				</div>
			</div>
			<div class="md:flex md:items-center mb-6">
				<div class="md:w-1/3">
					<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
						Username
					</label>
				</div>
				<div class="md:w-2/3">
					<input
						class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-full-name" type="text" placeholder="8-15 characters alphanumeric"
						:class="{ inputError: vue$.username.$error }" v-model="formData.username">
				<span class="text-xs text-red-500" v-for="error in vue$.username.$errors" :key="error.$uid">
					{{ error.$message }}
				</span>
				</div>
			</div>
			<div class="md:flex md:items-center mb-6">
				<div class="md:w-1/3">
					<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
						Password
					</label>
				</div>
				<div class="md:w-2/3">
					<input
						class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-password" type="password" placeholder="******************"
						:class="{ inputError: vue$.password.$error }" v-model="formData.password">
				<span class="text-xs text-red-500" v-for="error in vue$.password.$errors" :key="error.$uid">
					{{ error.$message }}
				</span>
				</div>
			</div>
			<div class="md:flex md:items-center mb-6">
				<div class="md:w-1/3">
					<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
						Confirm Password
					</label>
				</div>
				<div class="md:w-2/3">
					<input
						class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-password" type="password" placeholder="******************"
						:class="{ inputError: vue$.confirmPassword.$error }" v-model="formData.confirmPassword">
				<span class="text-xs text-red-500" v-for="error in vue$.confirmPassword.$errors" :key="error.$uid">
					{{ error.$message }}
				</span>
				</div>
			</div>
			<!-- <div class="md:flex md:items-center mb-6">
				<div class="md:w-1/3"></div>
				<label class="md:w-2/3 block text-gray-500 font-bold">
					<input class="mr-2 leading-tight" type="checkbox">
					<span class="text-sm">
						Send me your newsletter!
					</span>
				</label>
			</div> -->
			<div class="md:flex md:items-center">
				<div class="md:w-1/3"></div>
				<div class="md:w-2/3">
					<button
						class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
						type="submit">
						Sign Up
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script setup>
import BaseInput from "/src/components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import { useFormStore } from "@/stores/counter";
import { reactive, computed } from "vue";
import { required, alphaNum, minLength, email, sameAs, maxLength } from "@vuelidate/validators";

const formData = reactive({
	email: "",
	username: "",
	password: "",
	confirmPassword: "",
});
const formDataRules = computed(() => {
	return {
		email: { required, email },
		username: { required, alphaNum, minLength: minLength(8), maxLength: maxLength(15) },
		password: { required, minLength: minLength(8), maxLength: maxLength(25) },
		confirmPassword: { required, sameAsPassword: sameAs(formData.password) },
	};
});

const formStore = useFormStore();

const vue$ = useVuelidate(formDataRules, formData);
const submitForm = async () => {
	const result = await vue$.value.$validate();
	result ? alert("form telah disubmit") : console.log("==============");
};
</script>

<style>
.inputError {
	border: 2px solid red;
}

@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
