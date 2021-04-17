export const Algorithm = () => {
  return (
    <>
      <p>
        <span className="step">Step 1</span>
        <span>
          Consider your plain text P (e.g. ALGORITHM) and a password/key K (e.g.
          KEY).
        </span>
      </p>
      <br />
      <p>
        <span className="step">Step 2</span>
        <span>
          Repeat the key until it matches the length of plaintext. K =
          KEYKEYKEY.
        </span>
      </p>
      <br />
      <p>
        <span className="step">Step 3</span>
        <span>
          Traverse the plaintext and key character by character, pairing each
          letter. A with K (A,K), L with E (L,E), G with Y (G,Y), and so on.
        </span>
      </p>
      <br />
      <p>
        <span className="step">Step 4</span>
        <span>
          To encrypt a letter, first find offset of the letters. [A-Z] is
          [0-25]. With added digits, [A-9] is [0-35]. The offset of plaintext
          letter is P<sub>i</sub> and offset of key letter is K<sub>i</sub>.
          Calculate encryption E<sub>i</sub> using formula shown in{" "}
          <span className="highlight">Modification</span> section. Map the E
          <sub>i</sub> to character to get the cipher text.
        </span>
      </p>
      <br />
      <p>
        <span className="step">Step 5</span>
        <span>
          Iteratively following this process gives us the cipher text. In our
          case we get KP4YV63LA.
        </span>
      </p>
      <br />
      <p>
        <span className="step">Step 6</span>
        <span>
          Decryption works in reverse. Use the same key, length the size of
          cipher text. Map each character E<sub>i</sub> with K<sub>i</sub> and
          use the decryption formula (shown in{" "}
          <span className="highlight">Modification</span> section).
        </span>
      </p>
      <br />
      <p>
        <span className="step">Step 7</span>
        <span>
          Iteratively follow the process to obtain plaintext from cipher text.
        </span>
      </p>
    </>
  );
};
