export const Theory = () => {
  return (
    <>
      <p>
        The Vigenere cipher is a method of encrypting alphabetic text by using a
        series of interwoven Caesar ciphers, based on the letters of a keyword.
        It employs a form of polyalphabetic substitution.
      </p>
      <br />
      <p>
        To encrypt, a table of alphabets can be used, termed a{" "}
        <i>tabula recta</i>, Vigenere square or Vigenere table. It has the
        alphabet written out 26 times in different rows, each alphabet shifted
        cyclically to the left compared to the previous alphabet, corresponding
        to the 26 possible Caesar ciphers. At different points in the encryption
        process, the cipher uses a different alphabet from one of the rows. The
        alphabet used at each point depends on a repeating keyword. At different
        points in the encryption process, the cipher uses a different alphabet
        from one of the rows. The alphabet used at each point depends on a
        repeating keyword. The plaintext(P) and key(K) are added modulo 26.
      </p>
      <br />
      <p>
        <strong>Encryption </strong>E<sub>i</sub> = (P<sub>i</sub> + K
        <sub>i</sub>) mod 26 <br /> <br /> <strong>Decryption</strong> D
        <sub>i</sub> = (E<sub>i</sub> - K<sub>i</sub> + 26) mod 26
      </p>
      <br />
      <p>
        In current implementation however, we are going to modify this
        expression to increase the complexity of the algorithm which will make
        it much harder to crack. Read{" "}
        <span className="highlight">Modification</span>.
      </p>
    </>
  );
};
