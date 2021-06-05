<template>
  <div class="upload-news-wrapper">
    <div class="news-upload-box">
      <p>{{ url }}</p>
      <div class="heading">
        <input
          type="text"
          placeholder="Naslov vijesti"
          id="naslov-input"
          v-model="heading"
        />
      </div>
      <div class="description">
        <textarea
          name=""
          id="description-area"
          cols="30"
          rows="10"
          placeholder="Opis vijesti"
          v-model="description"
        ></textarea>
      </div>
    </div>
    <div class="upload-file-box">
      <div class="upload-feedback" v-bind:class="{ showfeedback: feedback }">
        Fotografija se učitava, molimo pričekajte sa dodavanjem vijesti
      </div>
      <div class="choose-box">
        <label for="file" class="label">Dodaj fotografiju</label>
        <input
          type="file"
          id="fileinput"
          @change="selectFile"
          ref="file"
          class="custom-file-input"
        />
      </div>
      <div class="photo-preview-box">
        <img v-bind:src="url" alt="" />
      </div>
    </div>
    <div class="send-button-box">
      <button id="savephoto" @click="uploadNews">Spremi vijest!</button>
    </div>
  </div>
</template>

<script>
import Api from "../services/Api";
import { firebase_exp } from "../services/firebaseCfg";
export default {
  data() {
    return {
      file: "",
      url: "",
      heading: "",
      description: "",
      feedback: false,
    };
  },
  methods: {
    async selectFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      console.log(this.file.name);
      this.feedback = true;

      var storageRef = firebase_exp.storage().ref("images/" + this.file.name);
      await storageRef.put(this.file).then((snapshot) => {
        console.log(snapshot);
      });
      await storageRef.getDownloadURL().then((url) => {
        this.url = url;
        this.feedback = false;
      });
      this.file = "";
    },
    uploadNews() {
      Api().post("addnews", {
        url: this.url,
        heading: this.heading,
        description: this.description,
      });
    },
  },
};
</script>

<style>
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "Odaberi datoteku";
  display: inline-block;
  background-color: #303030;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  color: white;
  padding: 12px;
  outline: none;
  transition: all 0.3s ease-in-out;
}
.custom-file-input:hover::before {
  border: none;
  outline: none;
  background-color: #747474;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  border: none;
  outline: none;
}

#fileinput {
  border: none;
}

button {
  transition: all 0.3s ease-in-out;
}
button:focus {
  outline: none;
}
input,
textarea {
  border-radius: 0px;
  border: 1px solid #575757;
}

input,
textarea:focus {
  outline: none;
}

#savephoto {
  background-color: #575757;
  padding: 10px;
  color: white;
}

#savephoto:hover {
  background-color: #1d1d1d;
}

.upload-news-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.upload-file-box {
  background-color: #f8f9fa;
  padding: 20px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.upload-file-box > div {
  margin: 20px;
}

.news-upload-box {
  background-color: #f8f9fa;
  padding: 20px;
  width: 1000px;
}

.choose-box {
  display: flex;
  flex-direction: column;
}

.choose-box > * {
  margin-top: 10px;
}

.news-upload-box > div {
  margin: 20px;
}

#description-area {
  width: 100%;
  padding: 10px;
}
#naslov-input {
  width: 100%;
  padding: 10px;
}

.send-button-box {
  width: 100%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-feedback {
  position: absolute;
  top: 150px;
  opacity: 0;
}
.showfeedback {
  opacity: 1 !important;
}
</style>
