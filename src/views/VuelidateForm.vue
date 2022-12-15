<template>
	<div class="about">
		<h1>Form Vuelidate</h1>
		<form class="w-full max-w-sm mb-150" @submit.prevent="submitForm">
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
						:class="{ inputError: vue$.email.$error }" v-model="formData.user.email">
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
						:class="{ inputError: vue$.username.$error }" v-model="formData.user.username">
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
						:class="{ inputError: vue$.password.$error }" v-model="formData.user.password">
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
						:class="{ inputError: vue$.confirmPassword.$error }" v-model="formData.user.confirmPassword">
					<span class="text-xs text-red-500" v-for="error in vue$.confirmPassword.$errors" :key="error.$uid">
						{{ error.$message }}
					</span>
				</div>
			</div>

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
		<t-table :headers="['Name', 'Email', 'Age', 'Sales']" :data="[
			['Alfonso Bribiesca', 'alfonso@vexilo.com', '31', '$9,999.00'],
			['Saida Redondo', 'saida@gmail.com', 27, '$124.00'],
		]"></t-table>

	</div>

	<div class="flex flex-col mb-40">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
				<div class="overflow-scroll bg-gray-100 h-85">
					<table class="min-w-full ">
						<thead class="sticky top-0 px-6 py-3 z-10 bg-gray-800 white border-b text-white">
							<tr>
								<th scope="col" class="text-sm font-medium px-6 py-4 text-left">
									#
								</th>
								<th scope="col" class="text-sm font-medium px-6 py-4 text-left">
									Email
								</th>
								<th scope="col" class="text-sm font-medium px-6 py-4 text-left">
									Username
								</th>
								<th scope="col" class="text-sm font-medium px-6 py-4 text-left">
									Action
								</th>
							</tr>
						</thead>
						<tbody v-for="(dataApi, index) in formData.api" :key="index">
							<tr class="border-b text-white" :class="{ 'bg-green-200': dataApi.published }">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									{{ index + 1 }}
								</td>
								<td class="text-sm text-gray-900 font-light p-0 whitespace-nowrap">
									<input type="text" v-model="dataApi.email"
										class="py-5 text-center bg-transparent focus-visible:outline-none ">
								</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									<input type="text" v-model="dataApi.username"
										class="py-5 text-center bg-transparent focus-visible:outline-none ">
								</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									<button @click="updateApiEntry(dataApi.id, dataApi.email, dataApi.username)"
										class="bg-transparent hover:bg-blue-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
										Update
									</button>
									<button @click="changePublishStatus(dataApi.id, dataApi.published)"
										class="hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
										:class="dataApi.published ? 'bg-transparent' : 'bg-yellow-300'">
										{{ dataApi.published === true ? 'Unpublish' : 'Publish' }}
									</button>
									<button @click="deleteApi(dataApi.id)"
										class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
										X
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import BaseInput from "/src/components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import { useFormStore } from "@/stores/counter";
import { reactive, computed } from "vue";
import { required, alphaNum, minLength, email, sameAs, maxLength } from "@vuelidate/validators";
import { createClient } from 'contentful-management'

const uniqueId = Math.random().toString(36).substring(7)

// Inisiasi ke API contentful
const client = createClient({
	accessToken: 'CFPAT-gvoYIIMPi42RDzz1xuKi9LIZwKXixypksulv1O3DHW0'
})

const formData = reactive({
	user: {
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	},
	api: []
});

const formDataRules = computed(() => {
	return {
		email: { required, email },
		username: { required, alphaNum, minLength: minLength(8), maxLength: maxLength(15) },
		password: { required, minLength: minLength(8), maxLength: maxLength(25) },
		confirmPassword: { required, sameAsPassword: sameAs(formData.user.password) },
	};
});

const formStore = useFormStore();

const vue$ = useVuelidate(formDataRules, formData.user);
const submitForm = async () => {
	const result = await vue$.value.$validate();
	// Create entry
	const createApiEntry = client.getSpace('rgqbm7gwpufb')
		.then((space) => space.getEnvironment('master'))
		.then((environment) => environment.createEntryWithId('formsFarms', uniqueId, {
			fields: {
				email: {
					'en-US': formData.user.email
				},
				username: {
					'en-US': formData.user.username
				},
				password: {
					'en-US': formData.user.password
				},
			}
		}))
		.then((entry) => { entry.publish(), console.log(entry) })
		.catch(console.error)
	result ? alert("form telah disubmit") : console.log("==============");
};

// Fetch data from API Contenful
const fetchApi = client.getSpace('rgqbm7gwpufb')
	.then((space) => space.getEnvironment('master'))
	.then((environment) => environment.getEntries({ content_type: "formsFarms" })
		.then(response => {
			response.items.map(item => {
				// console.log(item.isPublished())
				// console.log(Object.values(item.fields.email))
				// console.log("================")
				formData.api.push({
					id: item.sys.id,
					email: Object.values(item.fields.email),
					username: Object.values(item.fields.username),
					password: Object.values(item.fields.password),
					published: item.isPublished()
				});
			})
			console.log(formData.api);
		})
	)
	.catch(console.error)


const toGetEntry = (idEntry) => client.getSpace('rgqbm7gwpufb')
	.then((space) => space.getEnvironment('master'))
	.then((environment) => environment.getEntry(idEntry))


const deleteApi = (idEntry) => {
	toGetEntry(idEntry).then((entry) => entry.delete())
		.then(() => alert('Entry deleted.'))
		.catch(console.log(console.error()))
}

const changePublishStatus = (idEntry, publishedStatus) => {
	if (publishedStatus === true) {
		toGetEntry(idEntry).then((entry) => entry.unpublish())
			.then((entry) => console.log(`Entry ${entry.sys.id} unpublished.`))
			.catch(console.error)
	} else {
		toGetEntry(idEntry).then((entry) => entry.publish())
			.then((entry) => console.log(`Entry ${entry.sys.id} published.`))
			.catch(console.error)
	}
	// formData.api
}

const updateApiEntry = (idEntry, email, username) => {
	toGetEntry(idEntry).then((entry) => entry.patch([
		{
			op: 'replace',
			path: '/fields/email/en-US',
			value: email
		},
		{
			op: 'replace',
			path: '/fields/username/en-US',
			value: username
		}
	]))
		.then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
		.catch(console.error)
}


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
