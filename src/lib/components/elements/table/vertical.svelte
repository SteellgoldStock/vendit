<script lang="ts">
  interface Table {
    title: string;
    headers: string[];
    rows: string[][];
  }

  export let table: Table;
</script>

<table class="vertical">
  <thead>
    <tr>
      {#each table.headers as header}
        <th>{header}</th>
      {/each}
    </tr>
  </thead>

  <tbody>
    {#each table.rows as row}
      <tr>
        {#each row as cell}
          <td>{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  @import 'src/lib/scss/colors.scss';

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid $secondary;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);

    thead {
      tr {
        th {
          padding: 0.5rem;
          background-color: $secondary;
          color: $white;
          text-align: left;
        }
      }
    }

    tbody {
      tr {
        &:nth-child(1n){
          background-color: $tertiary;
        }

        &:nth-child(2n){
          background-color: $quaternary;
        }

        td {
          padding: 0.5rem;
          color: $white;
        }
      }
    }
  }
</style>