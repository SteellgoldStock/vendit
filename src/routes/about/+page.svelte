<script>
  import { Accordion } from "$lib/components/elements/accordion";
  import { Separator } from "$lib/components/elements/separator";
</script>

<svelte:head>
  <title>Vendit ・ About</title>
</svelte:head>

<div class="header">
  <div class="title">
    <h1 class="title">ABOUT VENDIT</h1>
  </div>
  <div class="subject">
    Here are some answers to the question
  </div>
</div>

<Separator />

<section class="faq">
  <Accordion title="How much does it cost?">
    It's <strong>free</strong>, we only take a 5% transaction fee for each payment you receive
  </Accordion>
  <Accordion title="How does it work? ">
    When you will put a plugin online, you will define its price, once a person will buy it the transaction will be paid on your PayPal account in the following minutes,
    <br>The user will receive a link by email address to access the download page on which he can download the plugin only <strong>once</strong>.
  </Accordion>
  <Accordion title="Is the storage of our plugins secure?">
    Yes, we use a secure storage system, we do not store your plugins on our servers, we use a CDN (Content Delivery Network) to store your plugins, a CDN is used by many websites such as Google, Facebook, etc, all requests to get a plugin is validated or not by a token, if the token is not valid our refuse the request.
  </Accordion>
  <Accordion title="If I decide to delete a plugin from the sales, is it deleted from your servers?">
    Yes, when you delete a plugin from the sales, it is deleted from our servers, and the download link is no longer valid.
  </Accordion>
  <Accordion title="How can I contact you?">
    You can contact us from the email address, or through the ticket service on the website.
  </Accordion>
  <Accordion title="How can I delete my account?">
    You can delete your account from the settings page, but be careful, once your account is deleted, you will not be able to access your plugins
    <br>If you are a seller and you have plugins for sale, your seller page will no longer be accessible and your plugins and data will be destroyed
    <br>You will be able to cancel the deletion by reconnecting within 30 days, after these days, it will be impossible for you to recover your data
  </Accordion>
  <Accordion title="If I get scammed, what do I do?">
    If you get scammed, you can contact us by email or through the ticket service, we will be able to help you.
    <br><br>
    <strong>To avoid such cases, here is what we do: </strong>
    <br>All plugins offered for sale are tested and verified by our team within 24 hours
    <br>If a plugin is available on the site it means that it works and that it has no problems !
    <br>If a seller updates the plugin file, it is also checked by our team.
  </Accordion>
  <Accordion title="If a seller update a purchased plugin, will I have to pay again?">
    This question depends on the seller, if the seller when he publishes an update checks the box to send the plugin with its new version to those who have already purchased it, in this case you do not need to pay, you will receive it by mail, or in the dashboard (only one download possible, do not lose it)
    <br>If not, you'll have to pay again, but you'll be alerted of the plugin update by mail and your dashboard
  </Accordion>
  <Accordion title="Can we ask for a refund?">
    No, otherwise it's too easy to get free plugins, and it's a waste of work for the developer
  </Accordion>
  <Accordion title="How do I know it's not a leak?">
    We systematically check the plugins, if we have any doubts about its origin we refuse it,
    <br>You can also spread the word, if you think it is one, you can report it on its product page
  </Accordion>
</section>

<style lang="scss">
  @import "../../../src/lib/scss/colors.scss";
  @import "../../../src/lib/scss/variables.scss";

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    background: $primary;
    color: $white;

    @media (max-width: $breakpoint-md) {
      padding: 10px 30px;
      text-align: center;
    }

    .title {
      h1 {
        font-size: 3rem;
        font-weight: 900;
        margin: 0;
      }

      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  section.faq {
    margin-top: -8px;
    margin-bottom: -8px;
    padding: 50px;
    background: linear-gradient(253.27deg, #2B324E 16.67%, rgba(58, 70, 118, 0.9) 47.32%);
  }
</style>