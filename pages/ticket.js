import Head from "next/head";
import styles from "../styles/Ticket.module.css";
import TicketForm from "../components/TicketForm.js";

export default function Ticket() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Event: Ticket</title>
        <meta name="description" content="Buy Ticket for the Next Event" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TicketForm />
      </main>
    </div>
  );
}
