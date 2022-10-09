<script lang="ts">
  interface Table {
    orientation: 'vertical' | 'horizontal';
    title: string;
    headers: string[];
    rows: string[][];
  }

  export let table: Table;
</script>

{#if table.orientation === "vertical"}
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
{:else}
  <table class="horizontal">
    <tbody>
      {#each table.rows as row}
        <tr>
          <td class="subject">{row[0]}</td>
          <td>{@html row[1]}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style lang="scss">
  @import '../../../../lib/scss/colors.scss';
  @import '../../../../lib/scss/variables.scss';

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid $secondary;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  }

  table.vertical {
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
        td {
          padding: 0.5rem;
          background-color: $tertiary;
          color: $white;
        }
      }
    }
  }

  table.horizontal {
    tr {
      th,
      td {
        padding: 0.5rem;
        background-color: $secondary;
        color: $white;
        text-align: left;
      }

      td.subject {
        background-color: $tertiary;
        color: $white;
        font-weight: 600;
      }
    }
  }
</style>