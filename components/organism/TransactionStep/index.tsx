import StepItem from "../../molecules/StepItem";

export default function TransactionStep() {
	return (
		<section id="feature" className="feature pt-50 pb-50">
			<div className="container-fluid">
				<h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
					Top Up Mudah
					<br /> Dengan Langkah Berikut
				</h2>
				<div className="row gap-lg-0 gap-4" data-aos="fade-up">
					<StepItem
						icon="icon"
						title="1. Pilih Game"
						desc="Pilih game yang ingin kamu top up"
					/>
					<StepItem
						icon="icon-1"
						title="2. Pilih Nominal"
						desc="Pilih nominal yang tersedia"
					/>
					<StepItem
						icon="icon-2"
						title="3. Bayar"
						desc="Bayar sesuai nominal yang kamu pilih"
					/>
					<StepItem
						icon="icon-2"
						title="4. Transaksi Berhasil"
						desc="Transaksi Sukses"
					/>
				</div>
			</div>
		</section>
	);
}
