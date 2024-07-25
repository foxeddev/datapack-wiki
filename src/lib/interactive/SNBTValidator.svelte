<script lang="ts">
  import { parse } from "nbtify";

  let value = "";
  let valid = "unset";
  let error = "";

  function validate() {
    try {
      parse(`{${value}}`);
      valid = "valid";
      error = "";
    } catch (e) {
      valid = "invalid";
      error = e as string;
    }
  }
</script>

<textarea
  spellcheck="false"
  autocomplete="off"
  bind:value
  on:input={validate}
  class="w-full h-full rounded-md bg-stone-800 p-2 text-stone-200 placeholder-stone-500 resize-none outline-none ring-2 transition-colors {valid !==
  'unset'
    ? valid === 'valid'
      ? 'ring-blue-500'
      : 'ring-red-500'
    : 'ring-stone-700'}"
  placeholder="Paste your SNBT here..."></textarea>
{error}