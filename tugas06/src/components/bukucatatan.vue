
<template>
  <div class="buku-container">
    <h1>Buku Catatan</h1>

    <form @submit.prevent="simpanBuku">
      <label>Judul Buku</label>
      <input
        type="text"
        v-model="judul"
        placeholder="Masukkan judul buku"
        required
      >

      <label>Kategori Buku</label>
      <select v-model="kategori" required>
        <option value="" disabled>Pilih kategori</option>
        <option value="Fiksi">Fiksi</option>
        <option value="Non-Fiksi">Non-Fiksi</option>
        <option value="Pendidikan">Pendidikan</option>
        <option value="Teknologi">Teknologi</option>
      </select>

      <label class="checkbox">
        <input type="checkbox" v-model="sudahDibaca">
        Sudah Dibaca
      </label>

      <button type="submit">Simpan Buku</button>
    </form>

    <div v-if="hasil" class="hasil">
      <h3>Hasil Input</h3>
      <p>Judul: {{ hasil.judul }}</p>
      <p>Kategori: {{ hasil.kategori }}</p>
      <p>Status: {{ hasil.status }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const judul = ref('')
const kategori = ref('')
const sudahDibaca = ref(false)
const hasil = ref(null)

function simpanBuku() {
  hasil.value = {
    judul: judul.value,
    kategori: kategori.value,
    status: sudahDibaca.value ? 'Sudah dibaca' : 'Belum dibaca'
  }
}
</script>

<style scoped>
.buku-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 25px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  color: #333;
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #2c3e50;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label {
  font-weight: bold;
}

input[type="text"],
select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 14px;
}

input:focus,
select:focus {
  outline: none;
  border-color: #42b883;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox input {
  width: 16px;
  height: 16px;
  accent-color: #42b883;
}

button {
  padding: 12px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #369b6e;
}

.hasil {
  margin-top: 25px;
  padding: 15px;
  background: #f0faf5;
  border-left: 4px solid #42b883;
  border-radius: 6px;
}

.hasil h3 {
  margin-top: 0;
  color: #369b6e;
}

.hasil p {
  margin: 8px 0;
}
</style>
