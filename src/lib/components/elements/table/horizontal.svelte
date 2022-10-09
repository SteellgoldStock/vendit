<script lang="ts">
  interface Table {
    title: string;
    rows: string[][];
  }

  export let table: Table;
</script>

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