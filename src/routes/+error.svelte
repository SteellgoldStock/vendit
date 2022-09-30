<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from '$lib/components/elements/button';

  let status: number = $page.status;
  let message: string = "";

  const statusText = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required",
  } as { [key: number]: string };

  $: message = statusText[status] || "Unknown Error";
</script>

<svelte:head>
  <title>Vendit ・ Error {status}</title>
</svelte:head>

<div class="error">
  <h1>{status}</h1>
  <p>{message}</p>
  
  <div class="button">
    <Button buttonInfo={{
      type: "link",
      text: "Go back to homepage",
      icon: "fa-solid fa-arrow-left",
      href: "/"
    }} />
  </div>
</div>

<style lang="scss">
  @import "../lib/scss/colors.scss";
  @import "../lib/scss/variables.scss";

  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    padding: 10px;
    min-height: 53vh;

    @media (max-width: $breakpoint-md) {
      min-height: 40vh;
    }

    h1 {
      font-size: 7rem;
      font-weight: 900;
      margin: 0;
      color: white;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 0;
      color: white;
    }

    .button {
      margin-top: 40px;
      padding: 10px;
    }
  }
</style>